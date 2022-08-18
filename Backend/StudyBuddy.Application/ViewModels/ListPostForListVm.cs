using System.Collections.Generic;

namespace StudyBuddy.Application.ViewModels
{
    public class ListPostForListVm
    {
        public List<PostForListVm> Posts { get; set; }
        public int Count { get; set; }
        public int PageSize { get; internal set; }
        public int CurrentPage { get; internal set; }
        public string SearchString { get; internal set; }
    }
}