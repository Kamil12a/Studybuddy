using Microsoft.EntityFrameworkCore.Migrations;

namespace StudyBuddy.Infrastructure.Migrations
{
    public partial class _5_MoveSubjectFromGroupPropToGroup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_GroupProperties_GroupPropertyId",
                table: "Subjects");

            migrationBuilder.DropIndex(
                name: "IX_Subjects_GroupPropertyId",
                table: "Subjects");

            migrationBuilder.DropColumn(
                name: "GroupPropertyId",
                table: "Subjects");

            migrationBuilder.AlterColumn<int>(
                name: "TutorId",
                table: "Groups",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "GroupOwnerId",
                table: "Groups",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SubjectId",
                table: "Groups",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_SubjectId",
                table: "Groups",
                column: "SubjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Subjects_SubjectId",
                table: "Groups",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Subjects_SubjectId",
                table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_SubjectId",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "SubjectId",
                table: "Groups");

            migrationBuilder.AddColumn<int>(
                name: "GroupPropertyId",
                table: "Subjects",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "TutorId",
                table: "Groups",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "GroupOwnerId",
                table: "Groups",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Subjects_GroupPropertyId",
                table: "Subjects",
                column: "GroupPropertyId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_GroupProperties_GroupPropertyId",
                table: "Subjects",
                column: "GroupPropertyId",
                principalTable: "GroupProperties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
