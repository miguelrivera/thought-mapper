namespace ThoughtMapper.Orchestrator
{
    public partial class NodeLink
    {
        // Navigation properties for EF Core
        public NodeEntity? FromNode { get; set; }

        public NodeEntity? ToNode { get; set; }
    }
}
