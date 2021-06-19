using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class deviceincidentId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IncidentId",
                table: "Devices",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices",
                column: "IncidentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Devices_Incidents_IncidentId",
                table: "Devices",
                column: "IncidentId",
                principalTable: "Incidents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Devices_Incidents_IncidentId",
                table: "Devices");

            migrationBuilder.DropIndex(
                name: "IX_Devices_IncidentId",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "IncidentId",
                table: "Devices");
        }
    }
}
