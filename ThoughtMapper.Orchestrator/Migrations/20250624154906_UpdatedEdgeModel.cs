using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ThoughtMapper.Orchestrator.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedEdgeModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NodeEntityNodeLink");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NodeLink",
                table: "NodeLink");

            migrationBuilder.AddColumn<Guid>(
                name: "From",
                table: "NodeLink",
                type: "TEXT",
                maxLength: 36,
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_NodeLink",
                table: "NodeLink",
                columns: new[] { "From", "To", "Type" });

            migrationBuilder.CreateIndex(
                name: "IX_NodeLink_To",
                table: "NodeLink",
                column: "To");

            migrationBuilder.AddForeignKey(
                name: "FK_NodeLink_Nodes_From",
                table: "NodeLink",
                column: "From",
                principalTable: "Nodes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_NodeLink_Nodes_To",
                table: "NodeLink",
                column: "To",
                principalTable: "Nodes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NodeLink_Nodes_From",
                table: "NodeLink");

            migrationBuilder.DropForeignKey(
                name: "FK_NodeLink_Nodes_To",
                table: "NodeLink");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NodeLink",
                table: "NodeLink");

            migrationBuilder.DropIndex(
                name: "IX_NodeLink_To",
                table: "NodeLink");

            migrationBuilder.DropColumn(
                name: "From",
                table: "NodeLink");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NodeLink",
                table: "NodeLink",
                columns: new[] { "Type", "To" });

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
        }
    }
}
