using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class DocumentInfoFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "DocInfoId",
                table: "SecurityDocuments",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SecurityDocuments_DocInfoId",
                table: "SecurityDocuments",
                column: "DocInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_SecurityDocuments_DocumentInfoes_DocInfoId",
                table: "SecurityDocuments",
                column: "DocInfoId",
                principalTable: "DocumentInfoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SecurityDocuments_DocumentInfoes_DocInfoId",
                table: "SecurityDocuments");

            migrationBuilder.DropIndex(
                name: "IX_SecurityDocuments_DocInfoId",
                table: "SecurityDocuments");

            migrationBuilder.AlterColumn<string>(
                name: "DocInfoId",
                table: "SecurityDocuments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BasicInfoId",
                table: "SecurityDocuments",
                type: "nvarchar(100)",
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
    }
}
