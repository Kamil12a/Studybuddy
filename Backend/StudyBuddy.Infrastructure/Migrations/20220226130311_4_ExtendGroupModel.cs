using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StudyBuddy.Infrastructure.Migrations
{
    public partial class _4_ExtendGroupModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Groups",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "MeetingDate",
                table: "Groups",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Place",
                table: "Groups",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ShortDescription",
                table: "Groups",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_TutorId",
                table: "Groups",
                column: "TutorId");

            // migrationBuilder.AddForeignKey(
            //     name: "FK_Groups_Users_TutorId",
            //     table: "Groups",
            //     column: "TutorId",
            //     principalTable: "Users",
            //     principalColumn: "Id",
            //     onDelete: ReferentialAction.NoAction);

            // migrationBuilder.DropForeignKey(
            //     name: "FK_Groups_Users_TutorId",
            //     table: "Groups");

            // migrationBuilder.AlterColumn<int>(
            //     name: "TutorId",
            //     table: "Groups",
            //     type: "int",
            //     nullable: true,
            //     oldClrType: typeof(int),
            //     oldType: "int");

            // migrationBuilder.AddForeignKey(
            //     name: "FK_Groups_Users_TutorId",
            //     table: "Groups",
            //     column: "TutorId",
            //     principalTable: "Users",
            //     principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.DropForeignKey(
            //     name: "FK_Groups_Users_TutorId",
            //     table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_TutorId",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "MeetingDate",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "Place",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "ShortDescription",
                table: "Groups");


            // migrationBuilder.AlterColumn<int>(
            //     name: "TutorId",
            //     table: "Groups",
            //     type: "int",
            //     nullable: false,
            //     defaultValue: 0,
            //     oldClrType: typeof(int),
            //     oldType: "int",
            //     oldNullable: true);

            // migrationBuilder.AddForeignKey(
            //     name: "FK_Groups_Users_TutorId",
            //     table: "Groups",
            //     column: "TutorId",
            //     principalTable: "Users",
            //     principalColumn: "Id",
            //     onDelete: ReferentialAction.Cascade);
        }
    }
}
