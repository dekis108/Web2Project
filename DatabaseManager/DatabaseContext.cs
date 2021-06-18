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

        public virtual DbSet<SecurityDocument> SecurityDocuments { get; set; }

        public virtual DbSet<DocumentInfo> DocumentInfoes { get; set; }

        public virtual DbSet<UserData> UserDatas { get; set; }

        public virtual DbSet<Device> Devices { get; set; }

        public virtual DbSet<Multimedia> Multimedia { get; set; }


        public void ApplySeed()
        {
            try
            {
                AddDevices();
                AddIncidents();
                AddUsers();
                AddDocuments();
            }
            catch { }

        }

        private void AddUsers()
        {
            UserData u1 = new UserData()
            {
                Id = "U1",
                Address = "Novi Sad, XYZ, 13",
                Name = "John",
                LastName = "Doe",
                Priority = "1",
            };

            this.UserDatas.Add(u1);
            this.SaveChanges();
        }

        private void AddDocuments()
        {
            DocumentInfo documentInfo1 = new DocumentInfo
            {
                Id = "DINFO1",
                Creator = this.UserDatas.Find("U1"),
                Status = DocumentStatus.Executing,
                Date = DateTime.Now,
                Details = "Empty details...",
                Notes = "123 -> zyx",
                PhoneNumber = "11354897",
                Planned = true,
            };

            DocumentInfo documentInfo2 = new DocumentInfo
            {
                Id = "DINFO2",
                Creator = this.UserDatas.Find("U1"),
                Status = DocumentStatus.Issued,
                Date = DateTime.Now.AddDays(1).AddHours(15),
                Details = "Detailed description",
                Notes = "blabla",
                PhoneNumber = "0021545",
                Planned = false,
            };

            SecurityDocument sd1 = new SecurityDocument()
            {
                Id = "SD1",
                DocumentInfo = documentInfo1,
            };

            SecurityDocument sd2 = new SecurityDocument()
            {
                Id = "SD2",
                DocumentInfo = documentInfo2,
            };

            this.DocumentInfoes.Add(documentInfo2);
            this.DocumentInfoes.Add(documentInfo1);

            this.SecurityDocuments.Add(sd2);
            this.SecurityDocuments.Add(sd1);

            this.SaveChanges();

        }

        private void AddIncidents()
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

            this.IncidentBasicInfoes.Add(incidentBasicInfo1);
            this.IncidentBasicInfoes.Add(incidentBasicInfo2);

            this.Incidents.Add(incident1);
            this.Incidents.Add(incident2);

            this.SaveChanges();
        }

        private void AddDevices()
        {
            Device d1 = new Device()
            {
                Id = "D1",
                Address = "Address1",
                Coords = "X:51.484781, Y:47.118748",
                Name = "Br.12YZ",
                Type = DeviceType.Breaker,
                Priority = 13,
            };

            Device d2 = new Device()
            {
                Id = "D2",
                Address = "Address2",
                Coords = "X:51.994781, Y:45.118748",
                Name = "KAJN!",
                Type = DeviceType.Switch,
                Priority = 1,
            };

            Device d3 = new Device()
            {
                Id = "D3",
                Address = "Address3",
                Coords = "X:51.4847, Y:47.1",
                Name = "33d3Z",
                Type = DeviceType.Transformator,
                Priority = 13,
            };
            Device d4 = new Device()
            {
                Id = "D4",
                Address = "Address4",
                Coords = "X:69.484781, Y:88.118748",
                Name = "4215AB",
                Type = DeviceType.Disconnector,
                Priority = 99,
            };

            this.Devices.Add(d1);
            this.Devices.Add(d2);
            this.Devices.Add(d3);
            this.Devices.Add(d4);

            this.SaveChanges();
        }
    }


}
