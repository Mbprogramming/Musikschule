using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Musikschule.Models;

namespace Musikschule.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KursController : ControllerBase
    {
        private readonly MusikschuleContext _context;

        public KursController(MusikschuleContext context)
        {
            _context = context;
        }

        // GET: api/Kurs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kurs>>> GetKurse()
        {
            if (_context.Kurse == null)
            {
                return NotFound();
            }
            return await _context.Kurse.ToListAsync();
        }

        // GET: api/Kurs/Schule/x
        [HttpGet("Schule/{id}")]
        public async Task<ActionResult<IEnumerable<Kurs>>> GetKurseForSchule(Guid id)
        {
            if (_context.Kurse == null)
            {
                return NotFound();
            }
            return await _context.Kurse.Where(w => w.MusikSchuleId == id).ToListAsync();
        }

        // GET: api/Kurs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Kurs>> GetKurs(Guid id)
        {
          if (_context.Kurse == null)
          {
              return NotFound();
          }
            var kurs = await _context.Kurse.FindAsync(id);

            if (kurs == null)
            {
                return NotFound();
            }

            return kurs;
        }

        // PUT: api/Kurs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKurs(Guid id, Kurs kurs)
        {
            if (id != kurs.Id)
            {
                return BadRequest();
            }

            _context.Entry(kurs).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KursExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Kurs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Kurs>> PostKurs(Kurs kurs)
        {
          if (_context.Kurse == null)
          {
              return Problem("Entity set 'MusikschuleContext.Kurse'  is null.");
          }
            _context.Kurse.Add(kurs);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKurs", new { id = kurs.Id }, kurs);
        }

        // DELETE: api/Kurs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKurs(Guid id)
        {
            if (_context.Kurse == null)
            {
                return NotFound();
            }
            var kurs = await _context.Kurse.FindAsync(id);
            if (kurs == null)
            {
                return NotFound();
            }

            _context.Kurse.Remove(kurs);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KursExists(Guid id)
        {
            return (_context.Kurse?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
