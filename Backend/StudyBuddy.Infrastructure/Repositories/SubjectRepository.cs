using System.Linq;
using StudyBuddy.Domain.Interfaces;
using StudyBuddy.Domain.Models;

namespace StudyBuddy.Infrastructure.Repositories
{
    public class SubjectRepository : ISubjectRepository
    {
        private readonly Context _context;

        public SubjectRepository(Context context)
        {
            _context = context;
        }

        public int AddSubject(Subject subject)
        {
            _context.Subjects.Add(subject);
            _context.SaveChanges();
            return subject.Id;
        }

        public void DeleteSubject(int subjectId)
        {
            var subject = _context.Subjects.Find(subjectId);
            _context.Subjects.Remove(subject);
            _context.SaveChanges();
        }

        public IQueryable<Subject> GetAllSubjects()
        {
            return _context.Subjects;
        }

        public Subject GetSubjectById(int subjectId)
        {
            return _context.Subjects.FirstOrDefault(x => x.Id == subjectId);
        }

        public void UpdateSubject(Subject subject)
        {
            _context.Attach(subject);
            _context.Entry(subject).Property("Name").IsModified = true;

            _context.SaveChanges();
        }
    }
}