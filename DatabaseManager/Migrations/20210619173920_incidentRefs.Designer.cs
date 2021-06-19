﻿// <auto-generated />
using System;
using DatabaseManager;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DatabaseManager.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20210619173920_incidentRefs")]
    partial class incidentRefs
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DatabaseManager.Model.Call", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustomerId")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("DeviceId")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("IncidentId")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("MalfunctionName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<int>("Reason")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("DeviceId");

                    b.HasIndex("IncidentId");

                    b.ToTable("Calls");
                });

            modelBuilder.Entity("DatabaseManager.Model.Device", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Coords")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Devices");
                });

            modelBuilder.Entity("DatabaseManager.Model.DocumentInfo", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CreatorId")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Details")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Notes")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("PhoneNumber")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("Planned")
                        .HasColumnType("bit");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CreatorId");

                    b.ToTable("DocumentInfoes");
                });

            modelBuilder.Entity("DatabaseManager.Model.HistoryChange", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("DocumentStatus")
                        .HasColumnType("int");

                    b.Property<string>("SecurityDocumentId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("SecurityDocumentId");

                    b.HasIndex("UserId");

                    b.ToTable("HistoryChanges");
                });

            modelBuilder.Entity("DatabaseManager.Model.Incident", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("BasicInfoId")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("BasicInfoId");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("DatabaseManager.Model.IncidentBasicInfo", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("ATA")
                        .HasColumnType("datetime2");

                    b.Property<int>("AffectedCustomers")
                        .HasColumnType("int");

                    b.Property<int>("CallsNumber")
                        .HasColumnType("int");

                    b.Property<bool>("Confirmed")
                        .HasColumnType("bit");

                    b.Property<DateTime>("ETA")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ETR")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("OutageTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<DateTime>("ScheduledTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("SelfAssigned")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.Property<double>("Voltage")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("IncidentBasicInfoes");
                });

            modelBuilder.Entity("DatabaseManager.Model.Multimedia", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<byte[]>("Image")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IncidentId")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SecurityDocumentId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("IncidentId");

                    b.HasIndex("SecurityDocumentId");

                    b.ToTable("Multimedia");
                });

            modelBuilder.Entity("DatabaseManager.Model.SecurityDocument", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("DocInfoId")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("DocInfoId");

                    b.ToTable("SecurityDocuments");
                });

            modelBuilder.Entity("DatabaseManager.Model.UserData", b =>
                {
                    b.Property<string>("Id")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Priority")
                        .HasColumnType("int");

                    b.Property<bool>("Residental")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("UserDatas");
                });

            modelBuilder.Entity("DatabaseManager.Model.Call", b =>
                {
                    b.HasOne("DatabaseManager.Model.UserData", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("DatabaseManager.Model.Device", "Device")
                        .WithMany("Calls")
                        .HasForeignKey("DeviceId");

                    b.HasOne("DatabaseManager.Model.Incident", "Incident")
                        .WithMany()
                        .HasForeignKey("IncidentId");

                    b.Navigation("Customer");

                    b.Navigation("Device");

                    b.Navigation("Incident");
                });

            modelBuilder.Entity("DatabaseManager.Model.DocumentInfo", b =>
                {
                    b.HasOne("DatabaseManager.Model.UserData", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorId");

                    b.Navigation("Creator");
                });

            modelBuilder.Entity("DatabaseManager.Model.HistoryChange", b =>
                {
                    b.HasOne("DatabaseManager.Model.SecurityDocument", "SecurityDocument")
                        .WithMany()
                        .HasForeignKey("SecurityDocumentId");

                    b.HasOne("DatabaseManager.Model.UserData", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("SecurityDocument");

                    b.Navigation("User");
                });

            modelBuilder.Entity("DatabaseManager.Model.Incident", b =>
                {
                    b.HasOne("DatabaseManager.Model.IncidentBasicInfo", "BasicInfo")
                        .WithMany()
                        .HasForeignKey("BasicInfoId");

                    b.Navigation("BasicInfo");
                });

            modelBuilder.Entity("DatabaseManager.Model.Multimedia", b =>
                {
                    b.HasOne("DatabaseManager.Model.Incident", "Incident")
                        .WithMany()
                        .HasForeignKey("IncidentId");

                    b.HasOne("DatabaseManager.Model.SecurityDocument", "SecurityDocument")
                        .WithMany()
                        .HasForeignKey("SecurityDocumentId");

                    b.Navigation("Incident");

                    b.Navigation("SecurityDocument");
                });

            modelBuilder.Entity("DatabaseManager.Model.SecurityDocument", b =>
                {
                    b.HasOne("DatabaseManager.Model.DocumentInfo", "DocumentInfo")
                        .WithMany()
                        .HasForeignKey("DocInfoId");

                    b.Navigation("DocumentInfo");
                });

            modelBuilder.Entity("DatabaseManager.Model.Device", b =>
                {
                    b.Navigation("Calls");
                });
#pragma warning restore 612, 618
        }
    }
}
