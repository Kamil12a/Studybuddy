using Microsoft.EntityFrameworkCore.Migrations;

namespace StudyBuddy.Infrastructure.Migrations
{
    public partial class _3_AddIsActiveToUserProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "UserProperties",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "UserProperties");
        }
    }
}
