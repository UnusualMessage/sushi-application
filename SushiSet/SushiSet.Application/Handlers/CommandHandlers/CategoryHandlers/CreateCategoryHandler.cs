﻿using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CategoryCommands;
using SushiSet.Application.Responses.CategoryResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CategoryCommands
{
    public class CreateCategoryHandler : IRequestHandler<CreateCategory, CategoryResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        private readonly IFileService _fileService;

        public CreateCategoryHandler(ICategoryRepository categoryRepository, IMapper mapper, IFileService fileService)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _fileService = fileService;
        }

        public async Task<CategoryResponse> Handle(CreateCategory request, CancellationToken cancellationToken)
        {

            Category newCategory = new()
            {
                Name = request.Name,
                PicturePath = await _fileService.UploadFile(request.Picture, request.Destination),
            };

            return _mapper.Map<CategoryResponse>(await _categoryRepository.AddAsync(newCategory));
        }
    }
}
