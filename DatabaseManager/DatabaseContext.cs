using DatabaseManager.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;

namespace DatabaseManager
{
    public class DatabaseContext : DbContext
    {
        static string path = "data source=DESKTOP-HDBFPKR\\SQLEXPRESS02;Initial Catalog=Web2Project;Integrated Security=SSPI;";

        public DatabaseContext() : base(path) { }

        public virtual DbSet<Incident> Incidents { get; set; }

        public virtual DbSet<IncidentBasicInfo> IncidentBasicInfos { get; set; }
    }
}
