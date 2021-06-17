using System;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManager.Model
{
    public class DocumentPost
    {
        /*
         export interface DocumentPost {
    planned: boolean,
    datetime: string,
    details: string,
    notes: string,
    phoneNumber: string,
    createdBy: string,

    workOperationsCompleted: boolean,
    tagsRemoved: boolean,
    groundingRemoved: boolean,
    ready: boolean
    }*/

        public bool planned { get; set; }

        public string datetime { get; set; }

        public string details { get; set; }

        public string notes { get; set; }

        public string phoneNumber { get; set; }

        public string createdBy { get; set; }

        public bool workOperationsCompleted { get; set; }
        public bool tagsRemoved { get; set; }

        public bool groundingRemoved { get; set; }
        public bool ready { get; set; }
    }
}
