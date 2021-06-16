using System;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManager.Model
{
    public class IncidentWidgetInfo
    {
        public int Drafts { get; set; }
        public int Cancelled { get; set; }

        public int Executing { get; set; }

        public int  Completed { get; set; }
        public IncidentWidgetInfo(int drafts, int cancelled, int executing, int completed)
        {
            Drafts = drafts;
            Cancelled = cancelled;
            Executing = executing;
            Completed = completed;
        }
    }
}
