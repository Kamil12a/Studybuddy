using System.Collections.Generic;
using StudyBuddy.Application.ViewModels;

namespace StudyBuddy.Application.Interfaces
{
    public interface ISubjectService
    {
        SubjectVm GetSubject(int subjectId);
        List<SubjectVm> GetAllSubjects();
        int AddSubject(SubjectVm subjectVm);
        void UpdateSubject(SubjectVm subjectVm);
        void DeleteSubject(int subjectId);
    }
}