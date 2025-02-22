import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

const UnitNotes = () => {
  const { subjectName } = useParams();

  // Map URL-friendly subject names to the keys in your data.
  const subjectMapping = {
    "object oriented software engineering": "Object Oriented Software Engineering",
    "data warehousing": "Data Warehousing",
    "network security": "Network Security",
    "multimedia and animation": "Multimedia And Animation",
    "introduction To Industrial Engineering": "Introduction To Industrial Engineering",
    "3D Printing And Design": "3D Printing And Design",
    mechanics: "Mechanics"
  };

  // Use the mapping to get the correct key.
  const normalizedSubjectName =
    subjectName && subjectMapping[subjectName.toLowerCase()]
      ? subjectMapping[subjectName.toLowerCase()]
      : subjectName;

  // Sample data for unit notes.
  const unitNotesData = {
    "Object Oriented Software Engineering": [
      {
        unit: "Unit 1: SOFTWARE PROCESS AND AGILE DEVELOPMENT",
        resource: "/resources/pdf/oose_unit-1.pdf",
        description: "Adopt iterative, flexible methods for continuous software delivery."
      },
      {
        unit: "Unit 2: REQUIREMENTS ANALYSIS AND SPECIFICATION",
        resource: "",
        description: " Accurately gather and document user needs for effective solutions."
      },
      {
        unit: "Unit 3: SOFTWARE DESIGN",
        resource: "",
        description: "Create clear, modular architectures to guide development."
      },
      {
        unit: "Unit 4: SOFTWARE TESTING AND MAINTAINENCE",
        resource: "",
        description: "Ensure reliability through systematic testing and ongoing updates."
      },
      {
        unit: "Unit 5: PROJECT MANAGEMENT",
        resource: "",
        description: "Coordinate resources and schedules to deliver projects on time and within budget."
      }
    ],
    "Data Warehousing": [
      {
        unit: "Unit 1: INTRODUCTION TO DATA WAREHOUSE",
        resource: "",
        description: "Understand the basics of building data warehouses, performing ETL, and using OLAP for analysis."
      },
      {
        unit: "Unit 2: ETL AND OLAP TECHNOLOGY",
        resource: "",
        description: "Grasp how metadata adds context and structure to data."
      },
      {
        unit: "Unit 3: META DATA,DATA MART AND PARTITION STRATEGY",
        resource: "",
        description: "Learn to design efficient data marts and effective partitioning strategies."
      },
      {
        unit: "Unit 4: DIMENSIONAL MODELING AND SCHEMA",
        resource: "",
        description: "Create clear, user-friendly dimensional models and schemas for analytics."
      },
      {
        unit: "Unit 5: SYSTEM AND PROCESS MANAGERS",
        resource: "",
        description: "Master managing data systems and business processes for smooth operations."
      }
    ],
    "Network Security": [
      {
        unit: "Unit 1: Introduction",
        resource: "",
        description: "Basics of Network Security."
      },
    ],
    "Multimedia And Animation": [
      {
        unit: "Unit 1: Introduction To Multimedia",
        resource: "",
        description: "Basics of Multimedia"
      },
    ],
    "Introduction To Industrial Engineering": [
      {
        unit: "Unit 1: Introduction",
        resource: "",
        description: "Basics of Industrial Engineering"
      },
    ],
    "3D Printing And Design": [
      {
        unit: "Unit 1: INTRODUCTION",
        resource: "",
        description: "Gain an overview of 3D printing technology and its impact on design."
      },
      {
        unit: "Unit 2: PRINCIPLE",
        resource: "",
        description: "Understand the core principles behind additive manufacturing."
      },
      {
        unit: "Unit 3: Learn how inkjet-based methods deposit materials in 3D printing.",
        resource: "",
        description: "Fundamentals of heat and energy."
      },
      {
        unit: "Unit 4: LASER TECHNOLOGY",
        resource: "",
        description: "Discover how laser systems enable precision in 3D printing."
      },
      {
        unit: "Unit 5: INDUSTRIAL APPLICATIONS",
        resource: "",
        description: "Explore real-world applications of 3D printing in various industries."
      }
    ]
    // Add other subjects as needed...
  };

  // Retrieve the notes for the normalized subject name.
  const notes = unitNotesData[normalizedSubjectName] || [];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        {normalizedSubjectName} - Unit Wise Notes
      </Typography>
      {notes.length === 0 ? (
        <Typography variant="body1" align="center">
          No resources available for {normalizedSubjectName}.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {notes.map((note, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card style={{ padding: '20px' }}>
                <CardContent>
                  <Typography variant="h6">{note.unit}</Typography>
                  {note.description && (
                    <Typography variant="body2" style={{ margin: '10px 0' }}>
                      {note.description}
                    </Typography>
                  )}
                  {note.resource ? (
                    <>
                      <Button
                        variant="outlined"
                        onClick={() => window.open(note.resource, '_blank')}
                        style={{ marginRight: '5px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.resource;
                          link.download = note.unit;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        Download
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      Be patient, it will be available soon.
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default UnitNotes;
