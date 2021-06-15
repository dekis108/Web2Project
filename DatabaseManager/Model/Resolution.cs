using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DatabaseManager.Model
{
    public class Resolution
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }
    }
}
