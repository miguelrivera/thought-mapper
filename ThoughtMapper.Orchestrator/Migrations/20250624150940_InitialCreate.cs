using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ThoughtMapper.Orchestrator.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NodeLink",
                columns: table => new
                {
                    To = table.Column<Guid>(type: "TEXT", maxLength: 36, nullable: false),
                    Type = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NodeLink", x => new { x.Type, x.To });
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", maxLength: 36, nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "TEXT", maxLength: 26, nullable: false),
                    HasChildren = table.Column<bool>(type: "INTEGER", nullable: false),
                    Updated = table.Column<DateTimeOffset>(type: "TEXT", maxLength: 26, nullable: false),
                    ShortName = table.Column<string>(type: "TEXT", maxLength: 30, nullable: false),
                    Payload = table.Column<string>(type: "TEXT", maxLength: 6990508, nullable: false),
                    PayloadType = table.Column<int>(type: "INTEGER", nullable: false),
                    PayloadDiscriminator = table.Column<int>(type: "INTEGER", nullable: true),
                    Title = table.Column<string>(type: "TEXT", maxLength: 1024, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Nodes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", maxLength: 36, nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "TEXT", maxLength: 26, nullable: false),
                    HasChildren = table.Column<bool>(type: "INTEGER", nullable: false),
                    Updated = table.Column<DateTimeOffset>(type: "TEXT", maxLength: 26, nullable: false),
                    ProjectId = table.Column<Guid>(type: "TEXT", maxLength: 36, nullable: false),
                    Payload = table.Column<string>(type: "TEXT", maxLength: 6990508, nullable: false),
                    PayloadType = table.Column<int>(type: "INTEGER", nullable: false),
                    PayloadDiscriminator = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nodes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Nodes_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NodeEntityNodeLink",
                columns: table => new
                {
                    NodeEntityId = table.Column<Guid>(type: "TEXT", nullable: false),
                    LinksType = table.Column<int>(type: "INTEGER", nullable: false),
                    LinksTo = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NodeEntityNodeLink", x => new { x.NodeEntityId, x.LinksType, x.LinksTo });
                    table.ForeignKey(
                        name: "FK_NodeEntityNodeLink_NodeLink_LinksType_LinksTo",
                        columns: x => new { x.LinksType, x.LinksTo },
                        principalTable: "NodeLink",
                        principalColumns: new[] { "Type", "To" },
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NodeEntityNodeLink_Nodes_NodeEntityId",
                        column: x => x.NodeEntityId,
                        principalTable: "Nodes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NodeEntityNodeLink_LinksType_LinksTo",
                table: "NodeEntityNodeLink",
                columns: new[] { "LinksType", "LinksTo" });

            migrationBuilder.CreateIndex(
                name: "IX_Nodes_ProjectId",
                table: "Nodes",
                column: "ProjectId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NodeEntityNodeLink");

            migrationBuilder.DropTable(
                name: "NodeLink");

            migrationBuilder.DropTable(
                name: "Nodes");

            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
