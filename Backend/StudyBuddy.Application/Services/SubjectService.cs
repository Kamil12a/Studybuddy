using System.Collections.Generic;
using AutoMapper;
using StudyBuddy.Application.Interfaces;
using StudyBuddy.Application.ViewModels;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Application.Services
{
    public class SubjectService : ISubjectService
    {
        private readonly ISubjectRepository _subjectRepo;
        private readonly IMapper _mapper;

        public SubjectService(ISubjectRepository subjectRepo, IMapper mapper)
        {
            _subjectRepo = subjectRepo;
            _mapper = mapper;
        }

        public int AddSubject(SubjectVm subjectVm)
        {
            var subject = _mapper.Map<Subject>(subjectVm);
            var id = _subjectRepo.AddSubject(subject);
            return id;
        }

        public void DeleteSubject(int subjectId)
        {
            _subjectRepo.DeleteSubject(subjectId);
        }

        public List<SubjectVm> GetAllSubjects()
        {
            var subjects = _subjectRepo.GetAllSubjects();
            var subjectsVm = _mapper.Map<List<SubjectVm>>(subjects);
            return subjectsVm;
        }

        public SubjectVm GetSubject(int subjectId)
        {
            var subject = _subjectRepo.GetSubjectById(subjectId);
            var subjectVm = _mapper.Map<SubjectVm>(subject);
            return subjectVm;
        }

        public void UpdateSubject(SubjectVm subjectVm)
        {
            var subject = _mapper.Map<Subject>(subjectVm);
            _subjectRepo.UpdateSubject(subject);
        }
    }
}