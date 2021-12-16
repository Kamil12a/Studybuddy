using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class SubjectVm : IMapFrom<Subject>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GroupPropertyId { get; set; }

        public void Mapping(MappingProfile profile)
        {
            profile.CreateMap<Subject, SubjectVm>();
        }
    }
}