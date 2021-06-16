using DatabaseManager.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManager
{
    public class DatabaseContext : DbContext
    {
        static string path = "data source=DESKTOP-HDBFPKR\\SQLEXPRESS02;Initial Catalog=Web2Project;Integrated Security=SSPI;";
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public virtual DbSet<Incident> Incidents { get; set; }

        public virtual DbSet<IncidentBasicInfo> IncidentBasicInfoes { get; set; }
    }
}
