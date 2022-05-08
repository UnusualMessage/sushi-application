using Microsoft.AspNetCore.Http;

using System.Threading.Tasks;

namespace SushiSet.Core.Interfaces.Services
{
    public interface IFileService
    {
        public Task<string> UploadFile(IFormFile file, string destination);
        public void DeleteFile(string fullPath);
    }
}
