using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Musikschule.Models
{
    public class Kurs
    {
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public Guid? MusikSchuleId { get; set; }
        public Musikschule? MusikSchule { get; set; }
        
        public string? Inhalt { get; set; }
        
        public DateTimeOffset? Start { get; set; }
        
        public TimeSpan? Dauer { get; set; }
        
        public int? TeilnehmerGesamt { get; set; }
        
        public int? TeilnehmerBelegt { get; set; }
    }
}
