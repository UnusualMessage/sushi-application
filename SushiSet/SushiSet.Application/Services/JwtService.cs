using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;
using SushiSet.Core.Interfaces.Services;
using SushiSet.Core.Settings;

namespace SushiSet.Application.Services
{
    public class JwtService : ITokenService
    {
        private readonly IOptions<JwtSettings> _jwtSettings;

        public JwtService(IOptions<JwtSettings> settings)
        {
            _jwtSettings = settings;
        }

        public AccessToken GetGeneratedAccessToken(User user)
        {
            JwtSecurityTokenHandler tokenHandler = new();
            byte[] key = Encoding.UTF8.GetBytes(_jwtSettings.Value.Key);

            ClaimsIdentity claimsIdentity = new(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            });

            SigningCredentials signingCredentials = new(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature);

            SecurityTokenDescriptor tokenDescriptor = new()
            {
                Subject = claimsIdentity,
                Issuer = _jwtSettings.Value.Issuer,
                Audience = _jwtSettings.Value.Audience,
                Expires = DateTime.Now.AddMinutes(_jwtSettings.Value.Expires),
                SigningCredentials = signingCredentials,
            };

            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

            return new Jwt()
            {
                Token = tokenHandler.WriteToken(token)
            };

        }

        public RefreshToken GetGeneratedRefreshToken(string ipAddress)
        {
            using RandomNumberGenerator rngCryptoServiceProvider = new RNGCryptoServiceProvider();

            byte[] randomBytes = new byte[64];
            rngCryptoServiceProvider.GetBytes(randomBytes);

            return new RefreshToken
            {
                Token = Convert.ToBase64String(randomBytes),
                Expires = DateTime.UtcNow.AddDays(7),
                Created = DateTime.UtcNow,
                CreatedByIp = ipAddress
            };
        }
    }
}
