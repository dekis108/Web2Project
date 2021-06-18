using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    public class Multimedia
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }

        public byte[] Image { get; set; }
        public string ImageUrl { get; set; }


        [ForeignKey("SecurityDocumentId")]
        public virtual SecurityDocument SecurityDocument { get; set; }

        public string SecurityDocumentId { get; set; }

    }
}
