dotnet tool install --global dotnet-ef

dotnet ef migrations add InitialCreate --project ..\StudyBuddy.Infrastructure\
dotnet ef database update

09.12 4h/5h