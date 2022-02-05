using Microsoft.EntityFrameworkCore.Migrations;

namespace StudyBuddy.Infrastructure.Migrations
{
    public partial class NumbersTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Number_Groups_GroupId",
                table: "Number");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Number",
                table: "Number");

            migrationBuilder.RenameTable(
                name: "Number",
                newName: "Numbers");

            migrationBuilder.RenameIndex(
                name: "IX_Number_GroupId",
                table: "Numbers",
                newName: "IX_Numbers_GroupId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Numbers",
                table: "Numbers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Numbers_Groups_GroupId",
                table: "Numbers",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Numbers_Groups_GroupId",
                table: "Numbers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Numbers",
                table: "Numbers");

            migrationBuilder.RenameTable(
                name: "Numbers",
                newName: "Number");

            migrationBuilder.RenameIndex(
                name: "IX_Numbers_GroupId",
                table: "Number",
                newName: "IX_Number_GroupId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Number",
                table: "Number",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Number_Groups_GroupId",
                table: "Number",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
