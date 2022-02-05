using Microsoft.EntityFrameworkCore.Migrations;

namespace StudyBuddy.Infrastructure.Migrations
{
    public partial class AddPosts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Group_Users_AdminId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_GroupProperties_Group_GroupId",
                table: "GroupProperties");

            migrationBuilder.DropForeignKey(
                name: "FK_Subject_GroupProperties_GroupPropertyId",
                table: "Subject");

            migrationBuilder.DropForeignKey(
                name: "FK_Topic_Subject_SubjectId",
                table: "Topic");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Group_GroupId",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topic",
                table: "Topic");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subject",
                table: "Subject");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Group",
                table: "Group");

            migrationBuilder.RenameTable(
                name: "Topic",
                newName: "Topics");

            migrationBuilder.RenameTable(
                name: "Subject",
                newName: "Subjects");

            migrationBuilder.RenameTable(
                name: "Group",
                newName: "Groups");

            migrationBuilder.RenameIndex(
                name: "IX_Topic_SubjectId",
                table: "Topics",
                newName: "IX_Topics_SubjectId");

            migrationBuilder.RenameIndex(
                name: "IX_Subject_GroupPropertyId",
                table: "Subjects",
                newName: "IX_Subjects_GroupPropertyId");

            migrationBuilder.RenameIndex(
                name: "IX_Group_AdminId",
                table: "Groups",
                newName: "IX_Groups_AdminId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topics",
                table: "Topics",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Groups",
                table: "Groups",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    OwnerId = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_Users_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Posts_OwnerId",
                table: "Posts",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_GroupProperties_Groups_GroupId",
                table: "GroupProperties",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Users_AdminId",
                table: "Groups",
                column: "AdminId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_GroupProperties_GroupPropertyId",
                table: "Subjects",
                column: "GroupPropertyId",
                principalTable: "GroupProperties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Topics_Subjects_SubjectId",
                table: "Topics",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Groups_GroupId",
                table: "Users",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroupProperties_Groups_GroupId",
                table: "GroupProperties");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Users_AdminId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_GroupProperties_GroupPropertyId",
                table: "Subjects");

            migrationBuilder.DropForeignKey(
                name: "FK_Topics_Subjects_SubjectId",
                table: "Topics");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Groups_GroupId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topics",
                table: "Topics");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Groups",
                table: "Groups");

            migrationBuilder.RenameTable(
                name: "Topics",
                newName: "Topic");

            migrationBuilder.RenameTable(
                name: "Subjects",
                newName: "Subject");

            migrationBuilder.RenameTable(
                name: "Groups",
                newName: "Group");

            migrationBuilder.RenameIndex(
                name: "IX_Topics_SubjectId",
                table: "Topic",
                newName: "IX_Topic_SubjectId");

            migrationBuilder.RenameIndex(
                name: "IX_Subjects_GroupPropertyId",
                table: "Subject",
                newName: "IX_Subject_GroupPropertyId");

            migrationBuilder.RenameIndex(
                name: "IX_Groups_AdminId",
                table: "Group",
                newName: "IX_Group_AdminId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topic",
                table: "Topic",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subject",
                table: "Subject",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Group",
                table: "Group",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Users_AdminId",
                table: "Group",
                column: "AdminId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GroupProperties_Group_GroupId",
                table: "GroupProperties",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subject_GroupProperties_GroupPropertyId",
                table: "Subject",
                column: "GroupPropertyId",
                principalTable: "GroupProperties",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Topic_Subject_SubjectId",
                table: "Topic",
                column: "SubjectId",
                principalTable: "Subject",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Group_GroupId",
                table: "Users",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
