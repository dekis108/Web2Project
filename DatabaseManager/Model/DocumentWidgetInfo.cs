using System;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManager.Model
{
    public class DocumentWidgetInfo
    {
        public int Drafts { get; set; }
        public int Cancelled { get; set; }

        public int Executing { get; set; }

        public int Issued { get; set; }
        public DocumentWidgetInfo(int drafts, int cancelled, int executing, int issued)
        {
            Drafts = drafts;
            Cancelled = cancelled;
            Executing = executing;
            Issued = issued;
        }
    }
}
