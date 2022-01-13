using AutoMapper;
using StudyBuddy.Application.Common.Mapping;

namespace StudyBuddy.Application.ViewModels
{
    public class UserForListVm : IMapFrom<StudyBuddy.Domain.Models.User>
    {
        public int Id { get; set; }
        public string Fullname { get; set; }
        
        public void Mapping(Profile profile)
        {
            profile.CreateMap<StudyBuddy.Domain.Models.User, UserForListVm>();
        }
    }
}