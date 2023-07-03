using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Musikschule.Models
{
    public class Musikschule
    {
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string? Adresse { get; set; }
        public ICollection<Kurs> Kurse { get; set; } = new List<Kurs>();
    }
}
