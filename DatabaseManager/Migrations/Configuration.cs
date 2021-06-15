namespace DatabaseManager.Migrations
{
    using DatabaseManager.Model;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DatabaseManager.DatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DatabaseManager.DatabaseContext context)
        {
            IncidentBasicInfo incidentBasicInfo1 = new IncidentBasicInfo()
            {
                Id = "BI1",
                Type = IncidentType.Unplanned,
                Priority = 3,
                Confirmed = false,
                Status = IncidentStatus.Draft,
                ETA = DateTime.Now.AddDays(-5),
                ATA = DateTime.Now,
                OutageTime = DateTime.Now.AddDays(-7),
                ETR = DateTime.Now.AddDays(1),
                AffectedCustomers = 13,
                CallsNumber = 1,
                Voltage = 0.22,
                ScheduledTime = DateTime.Now.AddDays(1),
                SelfAssigned = SelfAssign.No,
            };

            IncidentBasicInfo incidentBasicInfo2 = new IncidentBasicInfo()
            {
                Id = "BI2",
                Type = IncidentType.Planned,
                Priority = 28,
                Confirmed = true,
                Status = IncidentStatus.Cancelled,
                ETA = DateTime.Now.AddDays(-5),
                ATA = DateTime.Now,
                OutageTime = DateTime.Now.AddDays(-7),
                ETR = DateTime.Now.AddDays(1),
                AffectedCustomers = 10,
                CallsNumber = 3,
                Voltage = 0.14,
                ScheduledTime = DateTime.Now.AddDays(1),
                SelfAssigned = SelfAssign.No,
            };

            Incident incident1 = new Incident()
            {
                BasicInfo = incidentBasicInfo1,
                Id = "I1",
            };

            Incident incident2 = new Incident()
            {
                BasicInfo = incidentBasicInfo2,
                Id = "I2",
            };

            context.IncidentBasicInfos.Add(incidentBasicInfo1);
            context.IncidentBasicInfos.Add(incidentBasicInfo2);

            context.Incidents.Add(incident1);
            context.Incidents.Add(incident2);

            base.Seed(context);
        }
    }
}
