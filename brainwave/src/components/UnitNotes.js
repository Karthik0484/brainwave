import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const UnitNotes = () => {
  const { subjectName } = useParams();

  // Map URL subject names to the proper keys in our data.
  const subjectMapping = {
    "object oriented software engineering": "Object Oriented Software Engineering",
    "data warehousing": "Data Warehousing",
    "network security": "Network Security",
    "multimedia and animation": "Multimedia And Animation",
    "introduction To Industrial Engineering": "Introduction To Industrial Engineering",
    "3D Printing And Design": "3D Printing And Design",

  };

  const normalizedSubjectName =
    subjectName && subjectMapping[subjectName.toLowerCase()]
      ? subjectMapping[subjectName.toLowerCase()]
      : subjectName;

  // Sample unit notes data with syllabus, resource, and questionsResource.
  const unitNotesData = {
    "Object Oriented Software Engineering": [
      {
        unit: "Unit 1: Software Process and Agile Development",
        syllabus: "/resources/pdf/oose_syllabus_unit1.pdf",
        resource: "/resources/pdf/oose_unit-1.pdf",
        description: "An overview of Agile methodologies and iterative development processes.",
        questionsResource: "/resources/pdf/oose_unit-1_questions.pdf"
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

  const notes = unitNotesData[normalizedSubjectName] || [];

  // Define button styles using blue (#1976d2) with reduced hover effects.
  const outlinedButtonStyle = {
    borderColor: "#1976d2",
    color: "#1976d2",
    transition: "transform 0.15s, box-shadow 0.15s",
    "&:hover": {
      borderColor: "#1565c0",
      color: "#1565c0",
      transform: "scale(1.02)",
      boxShadow: "0px 2px 10px rgba(25, 118, 210, 0.2)"
    }
  };

  const containedButtonStyle = {
    backgroundColor: "#1976d2",
    color: "#fff",
    transition: "transform 0.15s, box-shadow 0.15s",
    "&:hover": {
      backgroundColor: "#1565c0",
      transform: "scale(1.02)",
      boxShadow: "0px 2px 10px rgba(25, 118, 210, 0.2)"
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {normalizedSubjectName} - Unit Wise Notes
      </Typography>
      {notes.length === 0 ? (
        <Typography variant="body1" align="center">
          No resources available for {normalizedSubjectName}.
        </Typography>
      ) : (
        <Grid container spacing={3} alignItems="stretch">
          {notes.map((note, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 450,
                  justifyContent: 'space-between'
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {note.unit}
                  </Typography>
                  {note.description && (
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {note.description}
                    </Typography>
                  )}
                </CardContent>
                {/* Syllabus Section */}
                <Box
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mb: 1,
                    alignItems: 'stretch'
                  }}
                >
                  {note.syllabus ? (
                    <>
                      <Button
                        variant="outlined"
                        sx={outlinedButtonStyle}
                        onClick={() => window.open(note.syllabus, '_blank')}
                        fullWidth
                      >
                        View Syllabus
                      </Button>
                      <Button
                        variant="contained"
                        sx={containedButtonStyle}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.syllabus;
                          link.download = `${note.unit} Syllabus`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        fullWidth
                      >
                        Download Syllabus
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Syllabus will be available soon.
                    </Typography>
                  )}
                </Box>
                {/* Resource Section */}
                <Box
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mb: 1,
                    alignItems: 'stretch'
                  }}
                >
                  {note.resource ? (
                    <>
                      <Button
                        variant="outlined"
                        sx={outlinedButtonStyle}
                        onClick={() => window.open(note.resource, '_blank')}
                        fullWidth
                      >
                        View Notes
                      </Button>
                      <Button
                        variant="contained"
                        sx={containedButtonStyle}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.resource;
                          link.download = note.unit;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        fullWidth
                      >
                        Download Notes
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Resource will be available soon.
                    </Typography>
                  )}
                </Box>
                {/* Questions Section */}
                <Box
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'stretch'
                  }}
                >
                  {note.questionsResource ? (
                    <>
                      <Button
                        variant="outlined"
                        sx={outlinedButtonStyle}
                        onClick={() => window.open(note.questionsResource, '_blank')}
                        fullWidth
                      >
                        View Important Questions
                      </Button>
                      <Button
                        variant="contained"
                        sx={containedButtonStyle}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.questionsResource;
                          link.download = `${note.unit} Questions`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        fullWidth
                      >
                        Download Important Questions
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Important questions will be available soon.
                    </Typography>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UnitNotes;
