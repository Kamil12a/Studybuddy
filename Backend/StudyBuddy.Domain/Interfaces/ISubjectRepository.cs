using System.Linq;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Domain.Interfaces
{
    public interface ISubjectRepository
    {
        IQueryable<Subject> GetAllSubjects();
        Subject GetSubjectById(int subjectId);
        int AddSubject(Subject subject);
        void UpdateSubject(Subject subject);
        void DeleteSubject(int subjectId);
    }
}