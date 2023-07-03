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
    public class MusikschuleController : ControllerBase
    {
        private readonly MusikschuleContext _context;

        public MusikschuleController(MusikschuleContext context)
        {
            _context = context;
        }

        // GET: api/Musikschule
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Musikschule.Models.Musikschule>>> GetMusikschulen()
        {
          if (_context.Musikschulen == null)
          {
              return NotFound();
          }
            return await _context.Musikschulen.ToListAsync();
        }

        // GET: api/Musikschule/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Musikschule.Models.Musikschule>> GetMusikschule(Guid id)
        {
          if (_context.Musikschulen == null)
          {
              return NotFound();
          }
            var musikschule = await _context.Musikschulen.FindAsync(id);

            if (musikschule == null)
            {
                return NotFound();
            }

            return musikschule;
        }

        // PUT: api/Musikschule/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMusikschule(Guid id, Musikschule.Models.Musikschule musikschule)
        {
            if (id != musikschule.Id)
            {
                return BadRequest();
            }

            _context.Entry(musikschule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MusikschuleExists(id))
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

        // POST: api/Musikschule
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Musikschule.Models.Musikschule>> PostMusikschule(Musikschule.Models.Musikschule musikschule)
        {
          if (_context.Musikschulen == null)
          {
              return Problem("Entity set 'MusikschuleContext.Musikschulen'  is null.");
          }
            _context.Musikschulen.Add(musikschule);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMusikschule", new { id = musikschule.Id }, musikschule);
        }

        // DELETE: api/Musikschule/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMusikschule(Guid id)
        {
            if (_context.Musikschulen == null)
            {
                return NotFound();
            }
            var musikschule = await _context.Musikschulen.FindAsync(id);
            if (musikschule == null)
            {
                return NotFound();
            }

            _context.Musikschulen.Remove(musikschule);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MusikschuleExists(Guid id)
        {
            return (_context.Musikschulen?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
