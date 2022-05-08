using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

using SushiSet.Core.Interfaces.Services;
using SushiSet.Core.Settings;

using System.IO;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Services
{
    public class FileService : IFileService
    {
        private readonly IOptions<StorageSettings> _storageSettings;

        public FileService(IOptions<StorageSettings> settings)
        {
            _storageSettings = settings;
        }

        public async Task<string> UploadFile(IFormFile file, string destination)
        {
            string fullPath = Path.Combine(destination, _storageSettings.Value.StaticFolderName,
                _storageSettings.Value.MediaFolderName, file.FileName);

            using FileStream fileStream = new(fullPath, FileMode.Create);
            await file.CopyToAsync(fileStream);

            return file.FileName;
        }

        public void DeleteFile(string fullPath)
        {
            File.Delete(fullPath);
        }
    }
}
