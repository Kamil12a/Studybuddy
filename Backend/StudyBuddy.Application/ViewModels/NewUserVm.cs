using AutoMapper;
using StudyBuddy.Application.Common.Mapping;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.ViewModels
{
    public class NewUserVm : IMapFrom<StudyBuddy.Domain.Models.User>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Course { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<User, NewUserVm>()
                .ReverseMap();
        }        
    }
}