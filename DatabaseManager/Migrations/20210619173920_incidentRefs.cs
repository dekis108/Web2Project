using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class incidentRefs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IncidentId",
                table: "Multimedia",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IncidentId",
                table: "Calls",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Multimedia_IncidentId",
                table: "Multimedia",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_Calls_IncidentId",
                table: "Calls",
                column: "IncidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Calls_Incidents_IncidentId",
                table: "Calls",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Multimedia_Incidents_IncidentId",
                table: "Multimedia",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calls_Incidents_IncidentId",
                table: "Calls");

            migrationBuilder.DropForeignKey(
                name: "FK_Multimedia_Incidents_IncidentId",
                table: "Multimedia");

            migrationBuilder.DropIndex(
                name: "IX_Multimedia_IncidentId",
                table: "Multimedia");

            migrationBuilder.DropIndex(
                name: "IX_Calls_IncidentId",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "IncidentId",
                table: "Multimedia");

            migrationBuilder.DropColumn(
                name: "IncidentId",
                table: "Calls");
        }
    }
}
