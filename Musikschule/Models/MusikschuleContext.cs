using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Diagnostics;
using System.Net;
using System.Threading.Channels;
using System;
using Microsoft.Data.SqlClient;

namespace Musikschule.Models
{
    public class MusikschuleContext : DbContext
    {
        public DbSet<Musikschule> Musikschulen { get; set; }

        public DbSet<Kurs> Kurse { get; set; }

        public MusikschuleContext(DbContextOptions<MusikschuleContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            if (builder == null)
                return;

            builder.Entity<Musikschule>().ToTable("Musikschule");
            builder.Entity<Musikschule>().Property(p => p.Id).HasDefaultValueSql("newid()");


            builder.Entity<Kurs>().ToTable("Kurs");
            builder.Entity<Kurs>().Property(p => p.Id).HasDefaultValueSql("newid()");
            builder.Entity<Kurs>()
                .HasOne(t => t.MusikSchule)
                .WithMany(t => t.Kurse)
                .HasForeignKey(f => f.MusikSchuleId);
        }

    }
}
