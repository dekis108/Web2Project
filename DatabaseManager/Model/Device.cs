using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    public enum DeviceType { Switch = 0, Breaker, Transformator, Disconnector }

    public class Device
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }

        public DeviceType Type { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Coords { get; set; }

        public int Priority { get; set; }

        public ICollection<Call> Calls { get; set; }

        public string IncidentId { get; set; }

        [ForeignKey("IncidentId")]
        public virtual Incident Incident { get; set; }

    }
}
