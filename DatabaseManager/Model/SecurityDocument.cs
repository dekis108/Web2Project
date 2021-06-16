using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    public class SecurityDocument
    {
        [Key]
        public string Id { get; set; }

        public string DocInfoId { get; set; }

        [ForeignKey("DocInfoId")]
        public virtual DocumentInfo DocumentInfo {get;set;}
    }
}
