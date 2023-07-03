using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Musikschule.Migrations
{
    public partial class create : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Musikschule",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "newid()"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Musikschule", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Kurs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false, defaultValueSql: "newid()"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MusikSchuleId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Inhalt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Start = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    Dauer = table.Column<TimeSpan>(type: "time", nullable: true),
                    TeilnehmerGesamt = table.Column<int>(type: "int", nullable: true),
                    TeilnehmerBelegt = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kurs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Kurs_Musikschule_MusikSchuleId",
                        column: x => x.MusikSchuleId,
                        principalTable: "Musikschule",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Kurs_MusikSchuleId",
                table: "Kurs",
                column: "MusikSchuleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kurs");

            migrationBuilder.DropTable(
                name: "Musikschule");
        }
    }
}
