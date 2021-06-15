using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DatabaseManager.Model
{
    /*
export interface UserData {
    name: string;
    lastName: string;
    address: string;
    account: number;
    priority: string;
}
*/
    public class UserData
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Priority { get; set; }
    }
}
