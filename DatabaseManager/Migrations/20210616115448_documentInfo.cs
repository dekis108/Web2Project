using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class documentInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BasicInfoId",
                table: "SecurityDocuments",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DocInfoId",
                table: "SecurityDocuments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SecurityDocuments_BasicInfoId",
                table: "SecurityDocuments",
                column: "BasicInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_SecurityDocuments_DocumentInfoes_BasicInfoId",
                table: "SecurityDocuments",
                column: "BasicInfoId",
                principalTable: "DocumentInfoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SecurityDocuments_DocumentInfoes_BasicInfoId",
                table: "SecurityDocuments");

            migrationBuilder.DropIndex(
                name: "IX_SecurityDocuments_BasicInfoId",
                table: "SecurityDocuments");

            migrationBuilder.DropColumn(
                name: "BasicInfoId",
                table: "SecurityDocuments");

            migrationBuilder.DropColumn(
                name: "DocInfoId",
                table: "SecurityDocuments");
        }
    }
}
