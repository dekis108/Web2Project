using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    public class HistoryChange
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }


        public DocumentStatus DocumentStatus { get; set; }

        public DateTime Date { get; set; }

        [ForeignKey("UserId")]
        public virtual UserData User { get; set; }

        public string UserId { get; set; }


        [ForeignKey("SecurityDocumentId")]
        public virtual SecurityDocument SecurityDocument { get; set; }

        public string SecurityDocumentId { get; set; }

    }
}
