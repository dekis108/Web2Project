using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class ripCallsNumber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CallsNumber",
                table: "IncidentBasicInfoes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CallsNumber",
                table: "IncidentBasicInfoes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
