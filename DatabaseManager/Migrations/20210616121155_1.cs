using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentInfoes_UserData_CreatorId",
                table: "DocumentInfoes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserData",
                table: "UserData");

            migrationBuilder.RenameTable(
                name: "UserData",
                newName: "UserDatas");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserDatas",
                table: "UserDatas",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentInfoes_UserDatas_CreatorId",
                table: "DocumentInfoes",
                column: "CreatorId",
                principalTable: "UserDatas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentInfoes_UserDatas_CreatorId",
                table: "DocumentInfoes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserDatas",
                table: "UserDatas");

            migrationBuilder.RenameTable(
                name: "UserDatas",
                newName: "UserData");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserData",
                table: "UserData",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentInfoes_UserData_CreatorId",
                table: "DocumentInfoes",
                column: "CreatorId",
                principalTable: "UserData",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
