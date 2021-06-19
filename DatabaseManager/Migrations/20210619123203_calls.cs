using Microsoft.EntityFrameworkCore.Migrations;

namespace DatabaseManager.Migrations
{
    public partial class calls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Call_Devices_DeviceId",
                table: "Call");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Call",
                table: "Call");

            migrationBuilder.RenameTable(
                name: "Call",
                newName: "Calls");

            migrationBuilder.RenameIndex(
                name: "IX_Call_DeviceId",
                table: "Calls",
                newName: "IX_Calls_DeviceId");

            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "Calls",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CustomerId",
                table: "Calls",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MalfunctionName",
                table: "Calls",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Priority",
                table: "Calls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Reason",
                table: "Calls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Calls",
                table: "Calls",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Calls_CustomerId",
                table: "Calls",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Calls_Devices_DeviceId",
                table: "Calls",
                column: "DeviceId",
                principalTable: "Devices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Calls_UserDatas_CustomerId",
                table: "Calls",
                column: "CustomerId",
                principalTable: "UserDatas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calls_Devices_DeviceId",
                table: "Calls");

            migrationBuilder.DropForeignKey(
                name: "FK_Calls_UserDatas_CustomerId",
                table: "Calls");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Calls",
                table: "Calls");

            migrationBuilder.DropIndex(
                name: "IX_Calls_CustomerId",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "Comment",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "MalfunctionName",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "Priority",
                table: "Calls");

            migrationBuilder.DropColumn(
                name: "Reason",
                table: "Calls");

            migrationBuilder.RenameTable(
                name: "Calls",
                newName: "Call");

            migrationBuilder.RenameIndex(
                name: "IX_Calls_DeviceId",
                table: "Call",
                newName: "IX_Call_DeviceId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Call",
                table: "Call",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Call_Devices_DeviceId",
                table: "Call",
                column: "DeviceId",
                principalTable: "Devices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
