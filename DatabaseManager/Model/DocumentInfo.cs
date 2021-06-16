using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    /*
     export interface DocumentInfo {
    planned: Planned;
    //workplan
    status: DocumentStatus;
    creator: Customer;
    crew: Crew;
    details: string;
    notes: string;
    phoneNumber: string;
    datetime: Date;
    }*/
    public enum DocumentStatus { Draft = 0, Issued, Cancelled, Executing }


    public class DocumentInfo
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }

        public bool Planned { get; set; }

        public DocumentStatus Status { get; set; }

        [MaxLength(100)]
        public string CreatorId { get; set; }

        [ForeignKey("CreatorId")]
        public virtual UserData Creator { get; set; }

        //crew

        [MaxLength(100)]
        public string Details { get; set; }

        [MaxLength(100)]
        public string Notes { get; set; }

        [MaxLength(100)]
        public string PhoneNumber { get; set; }

        public DateTime Date { get; set; }
    }
}
