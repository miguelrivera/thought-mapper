using Microsoft.EntityFrameworkCore;
using System;

namespace ThoughtMapper.Orchestrator.Data
{
    public class NodeMap { 
    }
    public class AppDbContext : DbContext
    {
        public DbSet<ProjectEntity> Projects { get; set; }
        public DbSet<NodeEntity> Nodes { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Nodes
            modelBuilder.Entity<NodeEntity>().HasKey(n => n.Id);

            // Projects
            modelBuilder.Entity<ProjectEntity>().HasKey(p => p.Id);
            modelBuilder.Entity<NodeEntity>()
                .HasOne<ProjectEntity>()
                .WithMany()
                .HasForeignKey(n => n.ProjectId);

            // NodeLinks (edges)
            modelBuilder.Entity<NodeLink>()
                .HasKey(nl => new { nl.From, nl.To, nl.Type });

            modelBuilder.Entity<NodeLink>()
                .HasOne(nl => nl.FromNode)
                .WithMany()
                .HasForeignKey(nl => nl.From)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<NodeLink>()
                .HasOne(nl => nl.ToNode)
                .WithMany()
                .HasForeignKey(nl => nl.To)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}