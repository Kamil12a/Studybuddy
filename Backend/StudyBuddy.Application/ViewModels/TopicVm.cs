using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class TopicVm : IMapFrom<Topic>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SubjectId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<Topic, TopicVm>();
        }
    }
}