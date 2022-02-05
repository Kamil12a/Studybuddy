using Microsoft.EntityFrameworkCore.Migrations;

namespace StudyBuddy.Infrastructure.Migrations
{
    public partial class RecomposeGroupAndUserRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Users_AdminId",
                table: "Groups");

            migrationBuilder.DropIndex(
                name: "IX_Groups_AdminId",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "AdminId",
                table: "Groups");

            migrationBuilder.AddColumn<int>(
                name: "GroupOwnerId",
                table: "Groups",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "GroupUser",
                columns: table => new
                {
                    JoinedGroupsId = table.Column<int>(type: "int", nullable: false),
                    JoinedUsersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupUser", x => new { x.JoinedGroupsId, x.JoinedUsersId });
                    table.ForeignKey(
                        name: "FK_GroupUser_Groups_JoinedGroupsId",
                        column: x => x.JoinedGroupsId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GroupUser_Users_JoinedUsersId",
                        column: x => x.JoinedUsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Groups_GroupOwnerId",
                table: "Groups",
                column: "GroupOwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_GroupUser_JoinedUsersId",
                table: "GroupUser",
                column: "JoinedUsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Users_GroupOwnerId",
                table: "Groups",
                column: "GroupOwnerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Users_GroupOwnerId",
                table: "Groups");

            migrationBuilder.DropTable(
                name: "GroupUser");

            migrationBuilder.DropIndex(
                name: "IX_Groups_GroupOwnerId",
                table: "Groups");

            migrationBuilder.DropColumn(
                name: "GroupOwnerId",
                table: "Groups");

            migrationBuilder.AddColumn<int>(
                name: "AdminId",
                table: "Groups",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_AdminId",
                table: "Groups",
                column: "AdminId");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Users_AdminId",
                table: "Groups",
                column: "AdminId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
